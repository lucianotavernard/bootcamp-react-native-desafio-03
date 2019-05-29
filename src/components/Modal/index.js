import React, { Component } from "react";
import PropTypes from "prop-types";

import { Text, Modal as ModalNative, ActivityIndicator } from "react-native";
import ErrorMessage from "~/components/ErrorMessage";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "~/store/ducks/users";
import { Creators as ModalActions } from "~/store/ducks/modal";

import { Container, Wrapper, Title, Input, Buttons, Button } from "./styles";

class Modal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      coordinates: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      }).isRequired
    }).isRequired,
    users: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired
  };

  state = {
    userInput: ""
  };

  handleHideModal = () => {
    const { hideModal } = this.props;

    hideModal();
    this.setState({ userInput: "" });
  };

  handleSubmit = () => {
    const { userInput } = this.state;
    const { modal, addUserRequest } = this.props;

    addUserRequest(userInput, modal.coordinates);
  };

  render() {
    const { userInput } = this.state;
    const { modal, users } = this.props;

    return (
      <ModalNative animationType="fade" transparent visible={modal.visible}>
        <Container>
          <Wrapper>
            <Title>Adicionar novo Dev</Title>

            {users.loading ? (
              <Wrapper noMargin>
                <ActivityIndicator size="small" />
              </Wrapper>
            ) : (
              <Input
                hasError={!!users.error}
                value={userInput}
                onChangeText={text => this.setState({ userInput: text })}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite o usuário do Github"
              />
            )}

            {users.error && <ErrorMessage message={users.error} />}

            <Buttons>
              <Button
                onPress={this.handleHideModal}
                disabled={users.loading || !userInput}
              >
                <Text>Cancelar</Text>
              </Button>

              <Button
                onPress={this.handleSubmit}
                disabled={users.loading || !userInput}
                success
              >
                <Text>Confirmar</Text>
              </Button>
            </Buttons>
          </Wrapper>
        </Container>
      </ModalNative>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
