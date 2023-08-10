import React, { Component } from "react";
import classes from "./Profile.module.css";
import axios from "axios";
import { decrypt } from "../../rsa/Rsa";

class Profile extends Component {
  verifiedIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="green"
        className="bi bi-patch-check-fill"
        viewBox="0 0 16 16"
      >
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
      </svg>
    );
  };

  componentDidMount = () => {
    let d = Number(this.props.detail[5]);
    let n = Number(this.props.detail[6]);
    console.log(d, n);
    console.log(this.props.detail[1])
    console.log(this.props.detail[2])
    console.log(this.props.detail[3])
    console.log(this.props.detail[4])
    axios.get(`https://ipfs.io/ipfs/${this.props.detail[1]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        
        this.setState({ data: JSON.parse(de) });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get(`https://ipfs.io/ipfs/${this.props.detail[2]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ p_photo: de });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get(`https://ipfs.io/ipfs/${this.props.detail[3]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ front: de });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get(`https://ipfs.io/ipfs/${this.props.detail[4]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ back: de });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      p_photo: "",
      front: "",
      back: "",
    };
  }
  render() {
    const { data, p_photo, front, back } = this.state;
  
    return (
      <div className={classes.bground}>
        <div className={classes.container}>
          <div className={classes.header}>
            <img src={p_photo} className={classes.pic} alt="Profile" />
            <div className={classes.verified}>
              {this.verifiedIcon()}
            </div>
          </div>
  
          <div className={classes.infoSection}>
     
  
            {/* Personal Information Section */}
            <div className={classes.personalInfoWrapper}>
              <h2>Personal Information</h2>
              <div className={classes.personalInfo}>
                <div className={classes.fieldGroup}>
                  <span className={classes.label}>Name:</span>
                  <span>{data.name}</span>
                </div>
                <div className={classes.fieldGroup}>
                  <span className={classes.label}>Father's Name:</span>
                  <span>{data.fathername}</span>
                </div>
                <div className={classes.fieldGroup}>
                  <span className={classes.label}>Mother's Name:</span>
                  <span>{data.mothername}</span>
                </div>
                <div className={classes.fieldGroup}>
                  <span className={classes.label}>Grandfather's Name:</span>
                  <span>{data.grandfathername}</span>
                </div>
                <div className={classes.fieldGroup}>
                  <span className={classes.label}>Date of Birth:</span>
                  <span>{data.dob}</span>
                </div>
                <div className={classes.fieldGroup}>
                  <span className={classes.label}>Contact Number:</span>
                  <span>{data.phone}</span>
                </div>
              </div>
            </div>
            {/* End of Personal Information Section */}
  
            {/* Address Information Section */}
            <div className={classes.personalInfoWrapper}>
              <h2>Address Information</h2>
              <div className={classes.fieldGroup}>
                <span className={classes.label}>Temporary Address:</span>
                <span>{data.taddress}</span>
              </div>
              <div className={classes.fieldGroup}>
                <span className={classes.label}>Permanent Address:</span>
                <span>{data.paddress}</span>
              </div>
            </div>
            {/* End of Address Information Section */}
  
            {/* Government Issued Documents Section */}
            <div className={classes.personalInfoWrapper}>
              <h2>Government Issued Documents</h2>
              <div className={classes.fieldGroup}>
                <span className={classes.label}>Front of Document:</span>
                <img className={classes.govt} src={front} alt="Front of Document" />
              </div>
              <div className={classes.fieldGroup}>
                <span className={classes.label}>Back of Document:</span>
                <img className={classes.govt} src={back} alt="Back of Document" />
            </div>
              </div>
            {/* End of Government Issued Documents Section */}
          </div>
        </div>
      </div>
    );
  }
  
}

export default Profile;
