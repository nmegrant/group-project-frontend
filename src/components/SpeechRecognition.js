import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

import { storeText } from "../store/text/actions";

import Button from "@material-ui/core/Button";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const Dictaphone = ({
  transcript,
  finalTranscript,
  resetTranscript,
  startListening,
  stopListening,
  browserSupportsSpeechRecognition,
}) => {
  const dispatch = useDispatch();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const startRecording = (event) => {
    event.preventDefault();
    startListening();
  };

  const stopRecording = (event) => {
    event.preventDefault();
    const text = finalTranscript;
    resetTranscript();
    stopListening();
    dispatch(storeText(text));
  };

  return (
    <div>
      <Button
        onClick={startRecording}
        color="primary"
        variant="contained"
        style={{ marginRight: "5px" }}
      >
        Start
      </Button>
      <Button
        onClick={stopRecording}
        color="primary"
        variant="contained"
        style={{ marginLeft: "5px" }}
      >
        Stop
      </Button>
      <p>{transcript}</p>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
