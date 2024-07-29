function EqPostAssessment() {
  return (
    // <div className="flex flex-col justify-around">
    //   <div className="flex flex-row items-center justify-around">
    //     <p>Statement</p>
    //     <div className="flex flex-row gap-3">
    //       {' '}
    //       <p>Rarely </p>
    //       <p>Sometimes </p>
    //       <p>Often </p>
    //       <p>Always </p>
    //     </div>
    //   </div>
    //   <div className="flex flex-row items-center justify-around">
    //     <p>I can identify what emotions I am feeling at any given time.</p>
    //     <div className="flex flex-row gap-5">
    //       {' '}
    //       <input type="radio" name="" id="" />
    //       <input type="radio" name="" id="" />
    //       <input type="radio" name="" id="" />
    //       <input type="radio" name="" id="" />
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-row items-center justify-around">
      <div className="flex flex-col items-start">
        <p className="text-xl font-semibold">Statement</p>
        <p>I can identify what emotions I am feeling at any given time.</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <div>
          <p className="text-base font-semibold">Never</p>
          <input type="radio" name="" id="" />
        </div>
        <div>
          <p className="text-base font-semibold">Rarely</p>
          <input type="radio" name="" id="" />
        </div>
        <div>
          <p className="text-base font-semibold">Sometimes</p>
          <input type="radio" name="" id="" />
        </div>
        <div>
          <p className="text-base font-semibold">Always</p>
          <input type="radio" name="" id="" />
        </div>
      </div>
    </div>
  );
}

export default EqPostAssessment;
