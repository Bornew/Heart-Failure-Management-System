import React, {Component} from 'react';
import {
  ChatWrapper, ChatContent, Avatar, ChatBox, MessageSender,
  Button, ButtonArea, MyChatBox, PatientMessageWrapper, PatientMessageContent, DoctorMessageWrapper, DoctorMessageContent
} from './style';

class ChatContainer extends Component {
  render() {
    return (
        <ChatWrapper>
          <ChatContent>
            <ChatBox>
              <Avatar
                  imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
              <PatientMessageWrapper>
                DIP
                <PatientMessageContent>
                  <p className='content'>视频做完了吗？</p>
                </PatientMessageContent>
              </PatientMessageWrapper>
            </ChatBox>
            <MyChatBox>
              <DoctorMessageWrapper>
                <DoctorMessageContent>
                  <p className='content'>再见</p>
                </DoctorMessageContent>
              </DoctorMessageWrapper>
            </MyChatBox>
            <ChatBox>
              <Avatar
                  imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
              <PatientMessageWrapper>
                iOS
                <PatientMessageContent>
                  <p className='content'>app做完了吗？</p>
                </PatientMessageContent>
              </PatientMessageWrapper>
            </ChatBox>
            <MyChatBox>
              <DoctorMessageWrapper>
                <DoctorMessageContent>
                  <p className='content'>对方忙线中...</p>
                </DoctorMessageContent>
              </DoctorMessageWrapper>
            </MyChatBox>
            <ChatBox>
              <Avatar
                  imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
              <PatientMessageWrapper>
                服务设计
                <PatientMessageContent>
                  <p className='content'>作业做完了吗？</p>
                </PatientMessageContent>
              </PatientMessageWrapper>
            </ChatBox>
            <MyChatBox>
              <DoctorMessageWrapper>
                <DoctorMessageContent>
                  <p className='content'>对方已离线...</p>
                </DoctorMessageContent>
              </DoctorMessageWrapper>
            </MyChatBox>
            <ChatBox>
              <Avatar
                  imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
              <PatientMessageWrapper>
                面向对象
                <PatientMessageContent>
                  <p className='content'>去上课了吗？</p>
                </PatientMessageContent>
              </PatientMessageWrapper>
            </ChatBox>
            <MyChatBox>
              <DoctorMessageWrapper>
                <DoctorMessageContent>
                  <p className='content'>对方已睡死...</p>
                </DoctorMessageContent>
              </DoctorMessageWrapper>
            </MyChatBox>
            <ChatBox>
              <Avatar
                  imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
              <PatientMessageWrapper>
                数据库
                <PatientMessageContent>
                  <p className='content'>嘿嘿</p>
                </PatientMessageContent>
              </PatientMessageWrapper>
            </ChatBox>
            <MyChatBox>
              <DoctorMessageWrapper>
                <DoctorMessageContent>
                  <p className='content'>嘿嘿</p>
                </DoctorMessageContent>
              </DoctorMessageWrapper>
            </MyChatBox>
          </ChatContent>
          <MessageSender placeholder='| 发消息'>
          </MessageSender>
          <ButtonArea>
            <Button>发送</Button>
          </ButtonArea>
        </ChatWrapper>
    );
  }
}

export default ChatContainer;