import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="elementor-element elementor-element-4a644ef8 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="4a644ef8" data-element_type="widget" data-widget_type="text-editor.default">
        {/* You can add your animation markup here */}
        <span className="loader-text">Loading...</span>
      </div>
    </div>
  );
}
