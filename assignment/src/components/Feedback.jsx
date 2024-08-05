import { CardContent, Typography, Avatar, Card } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      feedback:
        "The food was excellent and so was the service. I had mushroom risotto with scallops which was awesome had a burger over groems (gluten-fres) which was also very gooit. They were very conscientious about gluten allergies",
      rating: 4,
      avatar: "https://example.com/avatar1.jpg",
    },
    {
      name: "Dianne Russell",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
      rating: 5,
      avatar: "https://example.com/avatar2.jpg",
    },
    {
      name: "Devon Lane",
      feeback:
        "Normally winos are winos but theirs are lean meaty and tender and whatever",
      rating: 4,
      avatar: "https://example.com/avatar3.jpg",
    }

  ];
  return (
    <div className="bg-[#2c2c3d] rounded-lg m-5 p-2">
      <Typography variant="h6" className="text-white">
        Customer's Feedback
      </Typography>
      {feedbacks.map((feedback, index)=> (<div key={index} sx={{backgroundColor:"#2c2c3d", color:"white"}}>
         <CardContent className="flex items-start">
           <Avatar src={feedback.avatar} alt={feedback.name} className="mr-4" />
           <Box>
             <Typography variant="subtitle1" sx={{color:"white"}}>{feedback.name}</Typography>
             <Typography variant="body2" sx={{color:"white"}}>{feedback.feeback}</Typography>
             <Typography variant="body2" sx={{color:"white"}}>{"⭐".repeat(feedback.rating)}</Typography>
           </Box>
         </CardContent>
      </div>))}
    </div>
  );
};

export default Feedback;
