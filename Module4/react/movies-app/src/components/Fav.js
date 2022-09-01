import { Component } from "react";

class Fav extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul class="list-group">
              <li class="list-group-item">Favourites</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Drama</li>
              <li class="list-group-item">Animation</li>
              <li class="list-group-item">Comedy</li>
            </ul>
          </div>
          <div className="col-9">columns</div>
        </div>
      </div>
    );
  }
}

export default Fav;
