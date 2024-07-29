import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    // h-screen: Sets the height of the div to be equal to the height of the screen.
    // flex: Applies the Flexbox layout to the div.
    // items-center: Centers the items along the cross axis (vertically in this case).
    // justify-center: Centers the items along the main axis (horizontally in this case).
    <div className="h-screen flex items-center justify-center">
      <Loader2 size={30} className="animate-spin" />
    </div>
  );
};

export default loading;
