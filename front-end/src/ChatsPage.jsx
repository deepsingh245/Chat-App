import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{height: "100vh"}}>
    <PrettyChatWindow
      projectId="72cbf48b-e967-4548-9194-7150c20db2fd"
      username={props.user.username}
      secret={props.user.username}
      style={{ height: '100%' }}
    />
    </div>
  );
}
export default ChatsPage;