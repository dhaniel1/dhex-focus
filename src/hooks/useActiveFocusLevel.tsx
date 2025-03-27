import { focusLevels, FocusLevelType } from "@/lib/utils/static";
import { usePomodoroContext } from "@/store";

const useActiveFocusLevel = () => {
  const {
    state: { focusLevel },
  } = usePomodoroContext();

  const activeFocusLevel = focusLevels.find(
    (item) => Object.keys(item)[0] === focusLevel
  );

  const activeFocusLevelValues =
    activeFocusLevel![focusLevel as FocusLevelType];

  return { activeFocusLevelValues, focusLevel };
};

export default useActiveFocusLevel;
