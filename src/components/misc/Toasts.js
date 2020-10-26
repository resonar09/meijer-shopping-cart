import {
  ToastsContainer,
  ToastsContainerPosition,
  ToastsStore,
} from "react-toasts";


function render() {
  return (
    <div>
      <ToastsContainer
        position={ToastsContainerPosition.BOTTOM_RIGHT}
        store={ToastsStore}
      />
    </div>
  );
}
