const express = require("express");
const {
  createProject,
  allProjects,
  projectById,
  requestRole,
  roleById,
  acceptRequest,
  declineRequest,
  getRequests,
  getRoles,
  getProjectsOfUser,
  updateProject,
  deleteProject,
  getTeam,
  checkIfProjectExists,
} = require("../controllers/project");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createProjectValidator } = require("../validator");
const router = express.Router();

router.get("/projects", allProjects);
router.get("/projects/user/:userId", requireSignin, getProjectsOfUser);
router.delete("/project/delete/:projectId", requireSignin, deleteProject);
router.post(
  "/project/new/:userId",
  requireSignin,
  createProjectValidator,
  createProject
);
router.put("/project/edit/:userId/:projectId", requireSignin, updateProject);
router.put("/project/request/:userId/:projectId", requireSignin, requestRole);
router.get("/roles/:projectId", requireSignin, getRoles);
router.get("/project/team/:projectId", requireSignin, getTeam);
router.get("/requests/:projectId", requireSignin, getRequests);
router.put("/requests/accept/:userId/:projectId", requireSignin, acceptRequest);
router.put(
  "/requests/decline/:userId/:projectId",
  requireSignin,
  declineRequest
);
router.post("/project/check", requireSignin, checkIfProjectExists);
// any route containing: userId, our app will first excute userById()
router.param("userId", userById);
router.param("projectId", projectById);

module.exports = router;
