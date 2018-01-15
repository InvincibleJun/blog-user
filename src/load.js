import React, { Component } from "react";
import { Card, CardHeader } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/RaisedButton";
import config from "./assets/config/particles";
import './assets/iconfont/iconfont.css'

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    window.particlesJS("bg", config);
  }

  render() {
    return (
      <Card
        style={{
          width: 400,
          margin: "200px 0 0 1000px ",
          padding: "0 50px 50px"
        }}
      >
        <TextField
          style={{ marginTop: 20 }}
          hintText="请输入用户名"
          floatingLabelText="用户名"
          fullWidth={true}
          type="text"
        />
        <br />
        <TextField
          style={{ marginTop: 20 }}
          hintText="请输入密码"
          floatingLabelText="密码"
          type="password"
          fullWidth={true}
        />
        <RaisedButton label="登录" fullWidth={true} style={{ marginTop: 40 }} />
        <br />
        <br />

        <p><i className="iconfont icon-github" style={{ fontSize: 22 }} />github登陆</p>
      </Card>
    );
  }
}

export default Load;
