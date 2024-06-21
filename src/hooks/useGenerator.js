import { useEffect, useState } from "react";
import {
  useBaseColourGlobalData,
  useBaseColourGlobalDispatch,
} from "../contexts/baseColourContext";
import { useCurrentThemeData } from "../contexts/currentThemeContext";

// Custom hook to manage generator-related state and actions
export const useGenerator = () => {
  // Local state for modal visibility
  const [modal, setModal] = useState(false);

  // Access global base colour data and dispatch function
  const baseColourGlobal = useBaseColourGlobalData();
  const setBaseColourGlobal = useBaseColourGlobalDispatch();

  // Local state for form-based colour and its setter
  const [formBaseColour, setFormBaseColour] = useState(baseColourGlobal);

  // Access current theme data from context
  const currentTheme = useCurrentThemeData();

  // Sync local formBaseColour with global state on mount and update
  useEffect(() => {
    setFormBaseColour(baseColourGlobal);
  }, [baseColourGlobal]);

  // Update global state with the latest formBaseColour
  useEffect(() => {
    setBaseColourGlobal(formBaseColour);
  }, [formBaseColour, setBaseColourGlobal]);

  // Toggle modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  // Return state variables and functions for external usage
  return {
    modal, // Boolean state for modal visibility
    formBaseColour, // Current base colour selected in the form
    setFormBaseColour, // Function to update the form base colour
    currentTheme, // Current theme data fetched from context
    toggleModal, // Function to toggle modal visibility
  };
};
