export default function getFormData(node) {
  const formData = [...node.elements].reduce((data, element) => {
    if (element.name && element.type !== "submit") {
      data[element.name] = element.value.trim();
    }
    return data;
  }, {});
  return formData;
}
