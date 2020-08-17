import {Component} from "react";

interface Props {
    login: (a: { variables: LoginTypes.LoginVariables }) => void;
}

interface State {
    email: string;
}

export default class LoginForm extends Component<Props, State> {

}
