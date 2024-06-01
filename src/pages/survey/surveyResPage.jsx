import React, { useState } from 'react'
import MainHeader from "../../component/GuestHeader";
import SurveyList from '../survey/SurveyList';
import SurveyRes from './surveyRes';

function SurveyResPage() {
  const [mode, setMode] = useState('read')
  const [surveyID, setSurveyID] = useState(null)
  return (
    <>
    
      <MainHeader></MainHeader>
      {(mode === 'read') &&(
          <SurveyList setMode={setMode} setSurveyID={setSurveyID}></SurveyList>

      )}
      {(mode === 'write') &&(
          <SurveyRes setMode={setMode} surveyID={surveyID}></SurveyRes>

      )}
    </>
  )
}

export default SurveyResPage