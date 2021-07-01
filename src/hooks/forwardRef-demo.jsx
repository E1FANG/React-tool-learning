import React, {forwardRef, useEffect, useRef} from 'react';

const Demo = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <Button2 ref={buttonRef}/>
    </div>
  );
};

const Button2 = forwardRef((props, ref) => {
  console.log(ref.current);
  useEffect(()=>{
    console.log(ref.current);
  })
  return (
    <button ref={ref} {...props}/>
  );
});

export default Demo;
