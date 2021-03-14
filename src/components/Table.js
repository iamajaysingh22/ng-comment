import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: false,
      isError: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("http://localhost:4500/api/comments");
    if (response.ok) {
      console.log(response);
      const result = await response.json();
      this.setState({ comments: result.comment, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }
  renderTableHeader = () => {
    return Object.keys(this.state.comments[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };

  refresh = async () => {
    this.setState({ isLoading: true });
    const response = await fetch("http://localhost:4500/api/comments");
    if (response.ok) {
      console.log(response);
      const result = await response.json();
      this.setState({ comments: result.comment, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }

    console.log("click on refresh");
  };
  renderTableRows = () => {
    return this.state.comments.map((comment) => {
      return (
        <tr key={comment.id}>
          <td>{comment._id}</td>
          <td>{comment.postId}</td>
          <td>{comment.name}</td>
          <td>{comment.email}</td>
          <td>{comment.body}</td>
        </tr>
      );
    });
  };
  render() {
    const { comments, isLoading, isError } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error</div>;
    }

    return comments.length > 0 ? (
      <div>
        <div>
          <button type="button" class="btn btn-primary" onClick={this.refresh}>
            Refresh
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    ) : (
      <div>No users.</div>
    );
  }
}

export default Table;
