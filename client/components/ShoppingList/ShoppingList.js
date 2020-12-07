import React from "react";
import { connect } from "react-redux";
import { updateItemBought } from "../../store/singleItem";
// import TaskModal from "./TaskModal";
import { fetchItemsThunk, removeItemThunk } from "../../store/items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";


class ShoppingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  componentDidMount() {
    this.props.fetchItems();
  }

  async handleDelete(id) {
    try {
      await this.props.deleteItem(id);
      this.props.fetchItems();
    } catch (err) {
      console.error(err);
    }
  }

  async toggleCompleted(itemId, isBought) {
    try {
      await this.props.updateBought(itemId, !isBought);

      this.props.fetchItems();
    } catch (err) {
      console.error(err);
    }
  }

  showModal(e) {
    this.setState({ show: !this.state.show });
  }

  render() {
    let { items, groups } = this.props.items;

    return (
      <div className="task-wrapper">

        <div id="task-box">
          <div className="task-box-header">My Shopping List
          {/* <select name="selected">
          <option value="" disabled>
            Select Group
          </option>
          {groups && groups.length
            ? groups.map((group) => (
                <option key={group.id}>{group.name} </option>
              ))
            : "There are no groups"}
        </select> */}
        </div>
          <div className="task-box-body">
            <div id="task-box-categories">Category</div>

            {/* LIST OF TASKS */}
            <div id="task-box-list">
              {items && items.length
                ? items.map((item) => (
                    <p key={item.id} className="singletask">
                              <button
                        onClick={() => this.toggleBought(item.id, item.isBought)
                        }

                        className="group-completeTask"
                      >
                        <div
                          className={
                            item.isBought
                              ? "check-circle complete"
                              : "check-circle incomplete"
                          }
                        >
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                      </button>
                      {item.name}
                      <button
                        onClick={() => this.handleDelete(item.id)}
                        className="deleteTask"
                      >
                        X
                      </button>
                    </p>
                  ))
                : "You have no items in your shopping list!"}
            </div>
            <div id="just-another-layout-div"></div>
          </div>
          <div id="add-button-div">
            <button
              onClick={(e) => {
                this.showModal(e);
              }}
              className="add-task-button"
            >
              <div id="ahhh">
                <FontAwesomeIcon icon={faPlusSquare} />
              </div>
              Add Item
            </button>
            {/* <TaskModal
              onClose={(e) => this.showModal(e)}
              show={this.state.show}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  items: state.items,
  userId: state.user.id,
});

const mapDispatch = (dispatch) => ({
  fetchItems: () => dispatch(fetchItemsThunk()),
  deleteItem: (itemId) => dispatch(removeItemThunk(itemId)),
  updateBought: (itemId, isBought) =>
  dispatch(updateItemBought(itemId, isBought)),});

export default connect(mapState, mapDispatch)(ShoppingList);
