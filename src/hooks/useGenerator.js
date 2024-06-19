import { useEffect, useState } from "react";
import {
  useBaseColourGlobalData,
  useBaseColourGlobalDispatch,
} from "../contexts/baseColourContext";
import { useCurrentThemeData } from "../contexts/currentThemeContext";

export const useGenerator = () => {
  const [modal, setModal] = useState(false);

  // Base colour from global state
  let baseColourGlobal = useBaseColourGlobalData();

  // Base colour from form
  let [formBaseColour, setFormBaseColour] = useState(baseColourGlobal);

  let setBaseColourGlobal = useBaseColourGlobalDispatch();

  let currentTheme = useCurrentThemeData();

  // On component mount, set local form value to global state value
  useEffect(() => {
    setFormBaseColour(baseColourGlobal);
  }, [baseColourGlobal]);

  useEffect(() => {
    setBaseColourGlobal(formBaseColour);
  }, [formBaseColour, setBaseColourGlobal]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return {
    modal,
    formBaseColour,
    setFormBaseColour,
    currentTheme,
    toggleModal,
  };
};
