module.exports = {
    extends: ["prettier", "react-app"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  };