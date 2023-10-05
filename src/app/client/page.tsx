"use client";

export default function Client() {
  console.log("this log should be seen from the browser console");
  return (
    <div>
      <div>this page is on the client</div>
      <div>a console.log should appear in the terminal-console</div>
    </div>
  );
}
