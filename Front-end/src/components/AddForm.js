import React, { Component } from "react";
import addFormValidation from "../modules/AddFormValidation"
import moment from "moment"

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: "",
      time: "",
      heading: "",
      description: "",
      chars_left: 140,
      tag_list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChangeOfText.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChangeOfText = e => {
    const charCount = e.target.value.length;
    if (charCount > 140) {
      console.log("can not enter enough");
    } else {
      const charLeft = 140 - charCount;
      this.setState({ chars_left: charLeft });
    }
  }
  //////////////////////////Working With Tags 
    removeTag =  name => {

      let remove = this.state.tag_list.indexOf(name);
      console.log(remove);
      this.setState({
        tag_list: this.state.tag_list.filter((_, i) => i !== remove)
      },
      () => {
       console.log('fruits', this.state.tag_list);
     })
    }

  addTag = e => {
    e.preventDefault();
    let tag = e.target.value;
    if (e.key === 'Enter') {
      if (this.state.tag_list.length > 2) {
        alert("You can add Maximum of 3 tags!");
      } else {
        this.setState({
          tag_list: [...this.state.tag_list, tag]
        });
        e.target.value = "";
      }

    } //major if 
  }

  render() {
    /// moment().format(`YYYY-${moment().month.format("M")}-D`)
    const todaysSet = () => {
      let today = moment().format('D-MMM-YYYY');
      let d = moment(today);
      let final = moment().format(`YYYY-${d.month() + 1}-D`);
      return final;
    }

    const maxTimef = () => {
      let endDate = moment();
      let final = moment(endDate).format("hh:mm");
      // console.log(typeof (final), final)
      return final;
    }

    return (
      <div className="container addForm gap">
        <h1>Let Your Partner Know</h1>
        <form method="post" className="addFForm">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="date">Date : </label>
                </td>
                <td>
                  <input
                    type="date"
                    name="begin"
                    placeholder="dd-mm-yyyy"
                    className="dateField form-control marginSmall"
                    min={todaysSet()}
                    max="2021-12-31"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="time"> Time :</label>
                </td>
                <td>
                  <input className="form-control marginSmall" type="time" name="time" min={maxTimef()} max="23:59"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="heading">Tags  :</label>
                </td>
                <td>
                  <input type="text" className="tag-in form-control" placeholder="Press Enter To add tag" onKeyUp={this.addTag} />
                  <div>
                    <ul className="tagList">
                      {
                        this.state.tag_list.map( (tag , index) => {
                          return (
                            <li className="tagCloudofAdd" key={tag}>{tag} <span onClick={this.removeTag.bind(this, tag)}><i className="fas fa-times"></i></span></li>
                          )
                        })
                      }

                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="heading">Heading :</label>
                </td>
                <td>
                  {" "}
                  <input type="text" className="form-control marginSmall" name="heading"
                    onChange={this.handleChange}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Description</label>
                </td>
                <td>
                  <textarea className="form-control z-depth-1 marginSmall" id="exampleFormControlTextarea6" rows="3" cols="100" placeholder="Write something here..." defaultValue="Some text"
                    onChange={this.handleChangeOfText} maxLength="140" />
                  <div className="alert alert-info" role="alert">
                    Characters Left : {this.state.chars_left}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" className="btn btn-primary coolbutton" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default AddForm;


