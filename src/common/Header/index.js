import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import storage from '../../storage';
import {
  HeaderWrapper, NavSearch, SearchWrapper, Add_button, SearchResultWrapper,
  Input, ButtonRow, CancelButton,
  SearchResultContent, InputWrapper, ResultWrapper, ConfirmButton,
} from './style.js';

class Header extends Component {
  state = {
    searchInput: '',
  };
  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  handleAddPatient = () => {
    storage.addPatient(this.state.searchInput, (success) => {
      if (success==='1') {
        this.props.handleUnclickButton();
        alert('添加成功！');
        storage.refreshPatientList();
      }
      else {
        this.props.handleUnclickButton();
        console.log(this.props.clicked);
        alert('该用户不存在！请检查您的输入！');
      }

    });
  };

  getResultList = (show) => {
    if (show) {
      return (
          <SearchResultWrapper>
            <SearchResultContent>
              <InputWrapper>
                <p className='title'> 请输入病人ID/电话:</p>
                <Input onChange={this.handleSearchInput}/>
              </InputWrapper>
              {/*{this.handleSearchFailure(this.state.searchSuccess)}*/}
              <ButtonRow>
                <CancelButton onClick={this.props.handleUnclickButton}>取消</CancelButton>
                <ConfirmButton
                    onClick={this.handleAddPatient}>确认添加</ConfirmButton>
              </ButtonRow>
            </SearchResultContent>
          </SearchResultWrapper>
      );
    }
    else {
      return null;
    }
  };

  render() {
    return (
        <div>
          <HeaderWrapper>
            杭州市第三人民医院
            <SearchWrapper>
              <NavSearch onFocus={this.props.handleInputFocus}
                         onChange={this.props.handleInputChange}
              />
              <i className={this.props.focused
                  ? 'iconfont iconsearch focused'
                  : 'iconfont iconsearch'}
                 onClick={this.props.handleInputBlur}/>
              <Add_button
                  onClick={this.props.handleClickButton}>添加病人</Add_button>
            </SearchWrapper>
          </HeaderWrapper>
          {this.getResultList(this.props.clicked)}
        </div>
    );
  }
}

// const handleSearchFailure = (searchSuccess) => {
//   if (searchSuccess === false) {
//     return (
//         <ResultWrapper>
//           <p className='noResult'>! 用户名不存在，请检查输入</p>
//         </ResultWrapper>
//     );
//   }
//   else {
//     return;
//   }
// };
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // list: state.getIn(['header', 'list'])
    clicked: state.getIn(['header', 'clicked']),
  };
};

const mapDidpatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      storage.handleInputSubmit();
      dispatch(actionCreators.searchBlur());
    },
    handleInputChange(e) {
      storage.handleInputChange(e.target.value);
    },
    handleClickButton() {
      dispatch(actionCreators.addPatient());
    },
    handleUnclickButton() {
      dispatch(actionCreators.cancelAdd());
    },

  };
};

export default connect(mapStateToProps, mapDidpatchToProps)(Header);