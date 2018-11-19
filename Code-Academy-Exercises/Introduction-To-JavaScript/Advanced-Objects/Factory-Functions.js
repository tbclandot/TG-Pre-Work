const robotFactory = (model, mobile) => {
    return {
      model : model,
          mobile: mobile,
          beep () { 
        console.log('Beep Boop'); 
      }
      };
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();

  // Factory functions useful for creating many instances of an object quickly