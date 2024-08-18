"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const WorkoutExController_1 = require("./../controllers/WorkoutExController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const WorkoutController_1 = require("./../controllers/WorkoutController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const TraineeController_1 = require("./../controllers/TraineeController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PersonalTrainerController_1 = require("./../controllers/PersonalTrainerController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ExerciseController_1 = require("./../controllers/ExerciseController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "WorkoutExDTO": {
        "dataType": "refObject",
        "properties": {
            "workoutId": { "dataType": "double", "required": true },
            "bench": { "dataType": "double", "required": true },
            "repetitions": { "dataType": "string", "required": true },
            "priority": { "dataType": "double", "required": true },
            "exerciseId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
            "object": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WorkoutDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double" },
            "name": { "dataType": "string", "required": true },
            "finishDate": { "dataType": "datetime" },
            "description": { "dataType": "string" },
            "id_trainee": { "dataType": "double", "required": true },
            "id_personal": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TraineeDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double" },
            "name": { "dataType": "string", "required": true },
            "age": { "dataType": "double", "required": true },
            "address": { "dataType": "string", "required": true },
            "cell": { "dataType": "double", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PersonalTrainerDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double" },
            "name": { "dataType": "string", "required": true },
            "address": { "dataType": "string", "required": true },
            "cell": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExerciseDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double" },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/workout-ex', ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController.prototype.createWorkoutEx)), function WorkoutExController_createWorkoutEx(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workoutEx: { "in": "body", "name": "workoutEx", "required": true, "ref": "WorkoutExDTO" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutExController_1.WorkoutExController();
                yield templateService.apiHandler({
                    methodName: 'createWorkoutEx',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/workout-ex', ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController.prototype.updateWorkoutEx)), function WorkoutExController_updateWorkoutEx(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workoutEx: { "in": "body", "name": "workoutEx", "required": true, "ref": "WorkoutExDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutExController_1.WorkoutExController();
                yield templateService.apiHandler({
                    methodName: 'updateWorkoutEx',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/workout-ex', ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController.prototype.deleteWorkoutEx)), function WorkoutExController_deleteWorkoutEx(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workoutEx: { "in": "body", "name": "workoutEx", "required": true, "ref": "WorkoutExDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutExController_1.WorkoutExController();
                yield templateService.apiHandler({
                    methodName: 'deleteWorkoutEx',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/workout-ex', ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController.prototype.findExercise)), function WorkoutExController_findExercise(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workoutId: { "in": "query", "name": "workoutId", "required": true, "dataType": "double" },
                exerciseId: { "in": "query", "name": "exerciseId", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutExController_1.WorkoutExController();
                yield templateService.apiHandler({
                    methodName: 'findExercise',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/workout-ex/workout/:workoutId', ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutExController_1.WorkoutExController.prototype.getExercisesByWorkout)), function WorkoutExController_getExercisesByWorkout(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workoutId: { "in": "path", "name": "workoutId", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutExController_1.WorkoutExController();
                yield templateService.apiHandler({
                    methodName: 'getExercisesByWorkout',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/workout', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.createWorkout)), function WorkoutController_createWorkout(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workout: { "in": "body", "name": "workout", "required": true, "ref": "WorkoutDTO" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'createWorkout',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/workout', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.updateWorkout)), function WorkoutController_updateWorkout(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workout: { "in": "body", "name": "workout", "required": true, "ref": "WorkoutDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'updateWorkout',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/workout', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.deleteWorkout)), function WorkoutController_deleteWorkout(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                workout: { "in": "body", "name": "workout", "required": true, "ref": "WorkoutDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'deleteWorkout',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/workout/id/:id', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.findWorkout)), function WorkoutController_findWorkout(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'findWorkout',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/workout/all/trainee/:traineeId', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.findAllWorkoutsFromTrainee)), function WorkoutController_findAllWorkoutsFromTrainee(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                traineeId: { "in": "path", "name": "traineeId", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'findAllWorkoutsFromTrainee',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/workout/all/personal/:personalId', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.findAllWorkoutsFromPersonal)), function WorkoutController_findAllWorkoutsFromPersonal(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                personalId: { "in": "path", "name": "personalId", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'findAllWorkoutsFromPersonal',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/workout/all', ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController)), ...((0, runtime_1.fetchMiddlewares)(WorkoutController_1.WorkoutController.prototype.findAllWorkouts)), function WorkoutController_findAllWorkouts(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new WorkoutController_1.WorkoutController();
                yield templateService.apiHandler({
                    methodName: 'findAllWorkouts',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/trainee', ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController)), ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController.prototype.createTrainee)), function TraineeController_createTrainee(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                trainee: { "in": "body", "name": "trainee", "required": true, "ref": "TraineeDTO" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new TraineeController_1.TraineeController();
                yield templateService.apiHandler({
                    methodName: 'createTrainee',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/trainee', ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController)), ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController.prototype.updateTrainee)), function TraineeController_updateTrainee(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                trainee: { "in": "body", "name": "trainee", "required": true, "ref": "TraineeDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new TraineeController_1.TraineeController();
                yield templateService.apiHandler({
                    methodName: 'updateTrainee',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/trainee', ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController)), ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController.prototype.deleteTrainee)), function TraineeController_deleteTrainee(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                trainee: { "in": "body", "name": "trainee", "required": true, "ref": "TraineeDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new TraineeController_1.TraineeController();
                yield templateService.apiHandler({
                    methodName: 'deleteTrainee',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/trainee/id/:id', ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController)), ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController.prototype.findTrainee)), function TraineeController_findTrainee(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new TraineeController_1.TraineeController();
                yield templateService.apiHandler({
                    methodName: 'findTrainee',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/trainee/all', ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController)), ...((0, runtime_1.fetchMiddlewares)(TraineeController_1.TraineeController.prototype.findAllTrainees)), function TraineeController_findAllTrainees(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new TraineeController_1.TraineeController();
                yield templateService.apiHandler({
                    methodName: 'findAllTrainees',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/personal-trainer', ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController)), ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController.prototype.createPersonalTrainer)), function PersonalTrainerController_createPersonalTrainer(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                personalTrainer: { "in": "body", "name": "personalTrainer", "required": true, "ref": "PersonalTrainerDTO" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PersonalTrainerController_1.PersonalTrainerController();
                yield templateService.apiHandler({
                    methodName: 'createPersonalTrainer',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/personal-trainer', ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController)), ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController.prototype.updatePersonalTrainer)), function PersonalTrainerController_updatePersonalTrainer(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                personalTrainer: { "in": "body", "name": "personalTrainer", "required": true, "ref": "PersonalTrainerDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PersonalTrainerController_1.PersonalTrainerController();
                yield templateService.apiHandler({
                    methodName: 'updatePersonalTrainer',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/personal-trainer', ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController)), ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController.prototype.deletePersonalTrainer)), function PersonalTrainerController_deletePersonalTrainer(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                personalTrainer: { "in": "body", "name": "personalTrainer", "required": true, "ref": "PersonalTrainerDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PersonalTrainerController_1.PersonalTrainerController();
                yield templateService.apiHandler({
                    methodName: 'deletePersonalTrainer',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/personal-trainer/id/:id', ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController)), ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController.prototype.findPersonalTrainer)), function PersonalTrainerController_findPersonalTrainer(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PersonalTrainerController_1.PersonalTrainerController();
                yield templateService.apiHandler({
                    methodName: 'findPersonalTrainer',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/personal-trainer/all', ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController)), ...((0, runtime_1.fetchMiddlewares)(PersonalTrainerController_1.PersonalTrainerController.prototype.findAllPersonalTrainers)), function PersonalTrainerController_findAllPersonalTrainers(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PersonalTrainerController_1.PersonalTrainerController();
                yield templateService.apiHandler({
                    methodName: 'findAllPersonalTrainers',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/exercise', ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController)), ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController.prototype.createExercise)), function ExerciseController_createExercise(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                exercise: { "in": "body", "name": "exercise", "required": true, "ref": "ExerciseDTO" },
                success: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ExerciseController_1.ExerciseController();
                yield templateService.apiHandler({
                    methodName: 'createExercise',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/exercise', ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController)), ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController.prototype.updateExercise)), function ExerciseController_updateExercise(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                exercise: { "in": "body", "name": "exercise", "required": true, "ref": "ExerciseDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ExerciseController_1.ExerciseController();
                yield templateService.apiHandler({
                    methodName: 'updateExercise',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/exercise', ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController)), ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController.prototype.deleteExercise)), function ExerciseController_deleteExercise(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                exercise: { "in": "body", "name": "exercise", "required": true, "ref": "ExerciseDTO" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ExerciseController_1.ExerciseController();
                yield templateService.apiHandler({
                    methodName: 'deleteExercise',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/exercise/id/:id', ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController)), ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController.prototype.findExercise)), function ExerciseController_findExercise(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ExerciseController_1.ExerciseController();
                yield templateService.apiHandler({
                    methodName: 'findExercise',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/exercise/all', ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController)), ...((0, runtime_1.fetchMiddlewares)(ExerciseController_1.ExerciseController.prototype.findAllExercises)), function ExerciseController_findAllExercises(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                success: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
                fail: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ExerciseController_1.ExerciseController();
                yield templateService.apiHandler({
                    methodName: 'findAllExercises',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
