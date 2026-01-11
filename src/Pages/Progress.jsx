import React, { useState } from "react";
import {
  CheckCircle,
  Circle,
  Clock,
  Calendar,
  User,
  MessageSquare,
  FileText,
  Download,
  AlertCircle,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";

const ProjectProgressPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample project data
  const projectData = {
    name: "Cloud Kitchen Resturant",
    client: "Spice Drama Resturant",
    startDate: "Dec 15, 2025",
    endDate: "Jan 20, 2026",
    progress: 65,
    status: "On Track",
    projectManager: {
      name: "Atul Verma",
      avatar: "av.jpeg",
    },
  };

  const milestones = [
    {
      id: 1,
      title: "Project Kickoff & Discovery",
      description:
        "Initial meeting, requirements gathering, and project planning",
      status: "completed",
      date: "Jan 15, 2025",
      tasks: 8,
      completedTasks: 8,
    },
    {
      id: 2,
      title: "Design Phase",
      description: "Wireframes, mockups, and design system creation",
      status: "completed",
      date: "Jan 30, 2025",
      tasks: 12,
      completedTasks: 12,
    },
    {
      id: 3,
      title: "Development",
      description: "Frontend and backend implementation",
      status: "in-progress",
      date: "Feb 15, 2025",
      tasks: 20,
      completedTasks: 13,
    },
    {
      id: 4,
      title: "Content & SEO",
      description: "Content creation and SEO optimization",
      status: "in-progress",
      date: "Mar 1, 2025",
      tasks: 10,
      completedTasks: 4,
    },
    {
      id: 5,
      title: "Testing & QA",
      description: "Quality assurance and bug fixing",
      status: "pending",
      date: "Mar 15, 2025",
      tasks: 8,
      completedTasks: 0,
    },
    {
      id: 6,
      title: "Launch & Handover",
      description: "Final deployment and training",
      status: "pending",
      date: "Mar 30, 2025",
      tasks: 6,
      completedTasks: 0,
    },
  ];

  const recentUpdates = [
    {
      date: "Jan 11, 2025",
      title: "Homepage Design Approved",
      description: "Client approved the homepage design with minor revisions.",
      type: "milestone",
    },
    {
      date: "Jan 10, 2025",
      title: "Development Sprint 2 Started",
      description: "Beginning work on the services and portfolio pages.",
      type: "update",
    },
    {
      date: "Jan 8, 2025",
      title: "SEO Strategy Document Shared",
      description:
        "Comprehensive SEO strategy document uploaded to project files.",
      type: "document",
    },
    {
      date: "Jan 5, 2025",
      title: "Client Feedback Received",
      description: "Feedback incorporated into design revisions.",
      type: "feedback",
    },
  ];

  // const deliverables = [
  //   {
  //     name: "Design Mockups",
  //     type: "PDF",
  //     size: "24.5 MB",
  //     date: "Jan 28, 2025",
  //     status: "available",
  //   },
  //   {
  //     name: "Brand Guidelines",
  //     type: "PDF",
  //     size: "8.2 MB",
  //     date: "Jan 20, 2025",
  //     status: "available",
  //   },
  //   {
  //     name: "SEO Strategy Document",
  //     type: "PDF",
  //     size: "3.1 MB",
  //     date: "Jan 8, 2025",
  //     status: "available",
  //   },
  //   {
  //     name: "Final Website Files",
  //     type: "ZIP",
  //     size: "TBD",
  //     date: "Mar 30, 2025",
  //     status: "pending",
  //   },
  // ];

  const stats = [
    {
      label: "Completion",
      value: `${projectData.progress}%`,
      icon: Target,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Days Remaining",
      value: "9",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Tasks Completed",
      value: "37/64",
      icon: CheckCircle,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Milestones",
      value: "2/6",
      icon: Award,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "pending":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-600" size={24} />;
      case "in-progress":
        return <Clock className="text-blue-600" size={24} />;
      case "pending":
        return <Circle className="text-gray-400" size={24} />;
      default:
        return <Circle className="text-gray-400" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1e8] to-[#e8e4d8]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="logo1.png" alt="" className="h-15" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-light text-gray-900">
                  {projectData.name}
                </h1>
                <span className="px-4 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  {projectData.status}
                </span>
              </div>
              <p className="text-gray-600">Client: {projectData.client}</p>
              <p className="text-gray-500 text-sm mt-1">
                {projectData.startDate} - {projectData.endDate}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={projectData.projectManager.avatar}
                alt={projectData.projectManager.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">Project Manager</p>
                <p className="font-semibold text-gray-900">
                  {projectData.projectManager.name}
                </p>
                <p className="text-sm text-gray-600">
                  {projectData.projectManager.email}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Overall Progress
              </span>
              <span className="text-sm font-bold text-[#1a4d3c]">
                {projectData.progress}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1a4d3c] to-[#2a5d4c] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${projectData.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div
                  className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon size={24} />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {["overview", "updates"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#1a4d3c] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "overview" && (
            <>
              {/* Milestones */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Project Milestones
                </h2>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex-shrink-0">
                          {getStatusIcon(milestone.status)}
                        </div>
                        {index < milestones.length - 1 && (
                          <div
                            className={`w-0.5 h-16 mt-2 ${
                              milestone.status === "completed"
                                ? "bg-green-500"
                                : "bg-gray-300"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {milestone.title}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {milestone.date}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {milestone.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-500">
                            Tasks: {milestone.completedTasks}/{milestone.tasks}
                          </span>
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getStatusColor(
                                milestone.status
                              )} transition-all`}
                              style={{
                                width: `${
                                  (milestone.completedTasks / milestone.tasks) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "updates" && (
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Recent Updates
              </h2>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#1a4d3c] pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {update.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {update.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {update.description}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {update.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "deliverables" && (
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Project Deliverables
              </h2>
              {/* <div className="space-y-4">
                {deliverables.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-gray-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {file.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {file.type} • {file.size} • {file.date}
                        </p>
                      </div>
                    </div>
                    {file.status === "available" ? (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a4d3c] text-white rounded-lg hover:bg-[#2a5d4c] transition-colors">
                        <Download size={18} />
                        <span className="text-sm font-medium">Download</span>
                      </button>
                    ) : (
                      <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressPage;
