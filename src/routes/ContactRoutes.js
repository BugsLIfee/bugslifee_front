import React from 'react';
import QuestionEditContainer from '../contact/container/QuestionEditContainer';
import InfoListContainer from '../admin/container/info/InfoListContainer';
import QuestionMyListContainer from '../contact/container/QuestionMyListContainer';
import { Route } from 'react-router-dom';
import QuestionManyContainer from '../contact/container/QuestionManyContainer';
import ChatbotContainer from '../chatbot/container/ChatbotContainer';
import InfoEditContainer from '../admin/container/info/InfoEditContainer';


const ContactRoutes = ({ match }) => {

  return (
    <>
      <Route exact path={`${match.url}/qna-my`} component={QuestionMyListContainer} />
      <Route exact path={`${match.url}/qna-write`} component={InfoEditContainer} />
      <Route exact path={`${match.url}/info`} component={InfoListContainer} />
      <Route exact path={`${match.url}/qna-many`} component={QuestionManyContainer} />
      <Route exact path={`${match.url}/chat`} component={ChatbotContainer} />

    </>
  );
};
export default ContactRoutes;