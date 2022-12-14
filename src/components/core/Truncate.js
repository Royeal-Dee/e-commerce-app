export default function Truncate(props) {
  function renderTrucatedChildren() {
    if (props.children.legth >= props.maxValue) {
      return props.children;
    }

    return (
      props.children.slice(0, props.maxValue || props.children.length) +
      `${props.ellipsis ? props.ellipsis.repeat(3) : "..."}`
    );
  }

  if (!props.choldren) return null;
  return renderTruncatedChildren();
}
