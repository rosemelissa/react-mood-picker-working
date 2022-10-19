import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };

  const handleMoodChangeToLaughing = () =>
    queueRerenderWithNewMoodValue("laughing");
  const handleMoodChangeToSleepy = () =>
    queueRerenderWithNewMoodValue("sleepy");
  const handleMoodChangeToNerd = () => queueRerenderWithNewMoodValue("nerd");

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToLaughing}>🤣</button>
      <button onClick={handleMoodChangeToSleepy}>😴</button>
      <button onClick={handleMoodChangeToNerd}>🤓</button>
    </>
  );
}

export default MoodPickerDemo;
