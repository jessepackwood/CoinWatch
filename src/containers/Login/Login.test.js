import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';

describe('Login Container', () => {
  describe('Login', () => {
    let login;
    const mockLoginUser = jest.fn();
    const mockInputChange = jest.fn();
    const mockCreateUser = jest.fn();

    beforeEach( () => {
      login = shallow(
        <Login 
          loginUser={mockLoginUser}
          inputChange={mockInputChange}
          createUser={mockCreateUser}
        />);
    });

    it('should exist', () => {
      expect(login).toBeDefined();
    });

    it('should match the snapshot', () => {
      expect(login).toMatchSnapshot();
    });

    it('should call loginUser on form submit', () => {
      login.instance().handleSubmit();
      expect(mockLoginUser).toHaveBeenCalled();
    });

  });

  describe('mapStateToProps', () => {
    let mockStore;
    let result;

    beforeAll(() => {
      mockStore = {
        user: {
          email: 'email',
          password: 'password',
          uid: 'uid'
        }
      }
      result = mapStateToProps(mockStore);
    });

    it('should pull user email from the store', () => {
      expect(result.email).toEqual(mockStore.user.email);
    });

    it('should pull userID from the store', () => {
      expect(result.uid).toEqual(mockStore.uid);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch when userLoginAttempt is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.loginUser(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when loginUser is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.loginUser(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when getCurrentUser is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.createUser(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});