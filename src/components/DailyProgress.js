import { useState } from "react";
import { Card, Badge, Button, Modal, TextInput } from "flowbite-react";

function DailyProgress() {
  const [ongoingTasks, setOngoingTasks] = useState([
    "Design Dashboard UI",
    "Implement Sidebar Navigation",
    "Connect React Router Pages",
  ]);

  const [completedTasks] = useState([
    "Installed Node.js",
    "Installed Flowbite React",
    "Created Dashboard Page",
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");
  const [taskIndex, setTaskIndex] = useState(null);

  // OPEN MODAL
  const handleUpdate = (task, index) => {
    setSelectedTask(task);
    setTaskIndex(index);
    setOpenModal(true);
  };

  // SAVE UPDATED TASK
  const handleSave = () => {
    if (taskIndex === null) return;

    const updated = [...ongoingTasks];
    updated[taskIndex] = selectedTask;

    setOngoingTasks(updated);
    setOpenModal(false);
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <Card className="mb-6">
        <h1 className="text-3xl font-bold text-[#007979]">
          Daily Progress
        </h1>
        <p className="text-gray-600 mt-2">
          Track your daily work activities and completed tasks.
        </p>
      </Card>

      {/* TODAY DETAILS */}
      <Card className="mb-6">
        <h2 className="text-xl font-bold mb-3">
          Today's Details
        </h2>

        <p><b>Date:</b> 05 June 2026</p>
        <p><b>Employee:</b> Shahama</p>

        <p className="flex items-center gap-2">
          <b>Status:</b>
          <Badge color="success">Active</Badge>
        </p>
      </Card>

      {/* ONGOING TASKS */}
      <Card className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-[#007979]">
          Ongoing Tasks
        </h2>

        <ul className="space-y-3">
          {ongoingTasks.map((task, index) => (
            <li
              key={index}
              className="p-3 bg-blue-50 rounded-lg flex justify-between items-center"
            >
              <span>{task}</span>

              <Button
                size="xs"
                color="warning"
                onClick={() => handleUpdate(task, index)}
              >
                Update
              </Button>
            </li>
          ))}
        </ul>
      </Card>

      {/* COMPLETED TASKS */}
      <Card>
        <h2 className="text-xl font-bold mb-4 text-green-600">
          Completed Tasks
        </h2>

        <ul className="space-y-3">
          {completedTasks.map((task, index) => (
            <li
              key={index}
              className="p-3 bg-green-50 rounded-lg"
            >
              ✔ {task}
            </li>
          ))}
        </ul>
      </Card>

      {/* MODAL (FIXED FOR YOUR VERSION) */}
      <Modal
  show={openModal}
  size="md"
  popup={true}
  onClose={() => setOpenModal(false)}
>
  <div className="p-6 space-y-4">

    <h3 className="text-lg font-semibold">
      Update Task
    </h3>

    <TextInput
      value={selectedTask}
      onChange={(e) => setSelectedTask(e.target.value)}
    />

    {/* BUTTONS */}
    <div className="flex justify-end gap-2 pt-4">

      <Button
        color="gray"
        onClick={() => setOpenModal(false)}
      >
        Cancel
      </Button>

      <Button
        onClick={handleSave}
        className="bg-blue-600 text-white px-5 py-2"
      >
        Save
      </Button>

    </div>

  </div>
</Modal>

    </div>
  );
}

export default DailyProgress;