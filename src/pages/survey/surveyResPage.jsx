import React, { useState } from 'react'
import MainHeader from "../../component/GuestHeader";
import SurveyList from '../survey/SurveyList';
import SurveyRes from './surveyRes';

function SurveyResPage() {
  const [mode, setMode] = useState('write')
  return (
    <>
    
      <MainHeader></MainHeader>
      {(mode === 'read') &&(
          <SurveyList></SurveyList>

      )}
      {(mode === 'write') &&(
          <SurveyRes></SurveyRes>

      )}
    </>
  )
}

export default SurveyResPage