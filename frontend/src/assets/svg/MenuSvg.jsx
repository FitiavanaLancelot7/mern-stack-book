// Now it is a reusable component
const MenuSvg = ({ openNavigation }) => {
  // Check if the location of the navigation opened or not
  // Introducing the power of the front-end,
  // you should learn how to animate the icon perfectly to have good result
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >


      <rect
      // make it more soomther and align it to the origin center
      className="transition-all origin-center"
      
                // If the navigation was opened then just  animated it to the "y" position of 5 if not just rest it at 0
                y={openNavigation ? "5" : "0"}
                width="20"
                height="2"
                rx="1"
                fill="white"
                // to transform the rect
                transform={`rotate(${openNavigation ? "45" : "0"})`}
                
                />

      <rect
        // make it more soomther and align it to the origin center
        className="transition-all origin-center"
        // If the navigation was opened then just  animated it to the "y" position of 5 if not just rest it at 0
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        // to transform the rect
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />

      
    </svg>
  );
};

export default MenuSvg;
