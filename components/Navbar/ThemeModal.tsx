import { Modal, useToggle } from "amvasdev-ui";
import { Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ThemeList from "../ThemeList";

const ThemeModal = () => {
  const { theme, handleThemeChange } = useTheme();
  const [isModalOpen, toggleModal] = useToggle();

  return (
    <div>
      <button className="flex items-center gap-2" onClick={toggleModal}>
        <Palette />
        Choose your theme
      </button>
      {isModalOpen ? (
        <Modal title="Theme" onClose={toggleModal}>
          <ThemeList theme={theme} handleThemeChange={handleThemeChange} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ThemeModal;
