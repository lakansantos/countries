function headerButtons(
  isSorted: boolean,
  setSort: (isSorted: boolean) => void
) {
  const handleSort = () => {
    setSort(!isSorted);
  };

  return [
    {label: "Name", onClick: handleSort},
    {label: "Capital"},
    {label: "Population"},
  ].filter((item) => item);
}

export default headerButtons;
