const handleSubmit = async (e) => {
    e.preventDefault();
    const foodData = { organization, description, bestBefore, location };
  
    await fetch("http://localhost:5000/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData),
    });
  };
  