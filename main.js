import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LifeSimulationGame = () => {
  const [year, setYear] = useState(0);
  const [location, setLocation] = useState("");
  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState([]);
  const [savings, setSavings] = useState(0);

  const advanceYear = () => {
    if (year < 30) {
      setYear(year + 1);
      // Here you would update other stats based on choices
      setSavings(savings + 10000); // Simplified savings increase
    }
  };

  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Life Simulation Game</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Career Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Year: {year}/30</p>
            <Progress value={(year / 30) * 100} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Finances</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Savings: ${savings.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Location & Career</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Select onValueChange={setLocation} value={location}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nyc">New York City</SelectItem>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={setCareer} value={career}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select career" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software">Software Developer</SelectItem>
                <SelectItem value="finance">Financial Analyst</SelectItem>
                <SelectItem value="marketing">Marketing Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-2">
            <Button onClick={() => addSkill("Public Speaking")} className="mr-2">Learn Public Speaking</Button>
            <Button onClick={() => addSkill("Data Analysis")} className="mr-2">Learn Data Analysis</Button>
            <Button onClick={() => addSkill("Sales")}>Learn Sales</Button>
          </div>
        </CardContent>
      </Card>
      
      <Button onClick={advanceYear} disabled={year >= 30}>Advance Year</Button>
    </div>
  );
};

export default LifeSimulationGame;
