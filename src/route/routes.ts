/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WorkoutExController } from './../controllers/WorkoutExController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WorkoutController } from './../controllers/WorkoutController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TraineeController } from './../controllers/TraineeController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PersonalTrainerController } from './../controllers/PersonalTrainerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ExerciseController } from './../controllers/ExerciseController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "WorkoutExDTO": {
        "dataType": "refObject",
        "properties": {
            "id_workout": {"dataType":"double","required":true},
            "bench": {"dataType":"double","required":true},
            "repetitions": {"dataType":"string","required":true},
            "priority": {"dataType":"double","required":true},
            "exerciseId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": {"dataType":"string","required":true},
            "object": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WorkoutDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double"},
            "name": {"dataType":"string","required":true},
            "finishDate": {"dataType":"datetime"},
            "description": {"dataType":"string"},
            "id_trainee": {"dataType":"double","required":true},
            "id_personal": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TraineeDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double"},
            "name": {"dataType":"string","required":true},
            "age": {"dataType":"double","required":true},
            "address": {"dataType":"string","required":true},
            "cell": {"dataType":"double","required":true},
            "description": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PersonalTrainerDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double"},
            "name": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
            "cell": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExerciseDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double"},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        app.post('/workout-ex',
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController.prototype.createWorkoutEx)),

            async function WorkoutExController_createWorkoutEx(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workoutEx: {"in":"body","name":"workoutEx","required":true,"ref":"WorkoutExDTO"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutExController();

              await templateService.apiHandler({
                methodName: 'createWorkoutEx',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/workout-ex',
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController.prototype.updateWorkoutEx)),

            async function WorkoutExController_updateWorkoutEx(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workoutEx: {"in":"body","name":"workoutEx","required":true,"ref":"WorkoutExDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutExController();

              await templateService.apiHandler({
                methodName: 'updateWorkoutEx',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/workout-ex',
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController.prototype.deleteWorkoutEx)),

            async function WorkoutExController_deleteWorkoutEx(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workoutEx: {"in":"body","name":"workoutEx","required":true,"ref":"WorkoutExDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutExController();

              await templateService.apiHandler({
                methodName: 'deleteWorkoutEx',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/workout-ex',
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutExController.prototype.getExercisesFromWorkout)),

            async function WorkoutExController_getExercisesFromWorkout(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workoutId: {"in":"query","name":"workoutId","required":true,"dataType":"double"},
                    exerciseId: {"in":"query","name":"exerciseId","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutExController();

              await templateService.apiHandler({
                methodName: 'getExercisesFromWorkout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/workout',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.createWorkout)),

            async function WorkoutController_createWorkout(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workout: {"in":"body","name":"workout","required":true,"ref":"WorkoutDTO"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'createWorkout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/workout',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.updateWorkout)),

            async function WorkoutController_updateWorkout(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workout: {"in":"body","name":"workout","required":true,"ref":"WorkoutDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'updateWorkout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/workout',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.deleteWorkout)),

            async function WorkoutController_deleteWorkout(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    workout: {"in":"body","name":"workout","required":true,"ref":"WorkoutDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'deleteWorkout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/workout/id/:id',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.findWorkout)),

            async function WorkoutController_findWorkout(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'findWorkout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/workout/all/trainee/:traineeId',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.findAllWorkoutsFromTrainee)),

            async function WorkoutController_findAllWorkoutsFromTrainee(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    traineeId: {"in":"path","name":"traineeId","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'findAllWorkoutsFromTrainee',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/workout/all/personal/:personalId',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.findAllWorkoutsFromPersonal)),

            async function WorkoutController_findAllWorkoutsFromPersonal(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    personalId: {"in":"path","name":"personalId","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'findAllWorkoutsFromPersonal',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/workout/all',
            ...(fetchMiddlewares<RequestHandler>(WorkoutController)),
            ...(fetchMiddlewares<RequestHandler>(WorkoutController.prototype.findAllWorkouts)),

            async function WorkoutController_findAllWorkouts(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new WorkoutController();

              await templateService.apiHandler({
                methodName: 'findAllWorkouts',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/trainee',
            ...(fetchMiddlewares<RequestHandler>(TraineeController)),
            ...(fetchMiddlewares<RequestHandler>(TraineeController.prototype.createTrainee)),

            async function TraineeController_createTrainee(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    trainee: {"in":"body","name":"trainee","required":true,"ref":"TraineeDTO"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TraineeController();

              await templateService.apiHandler({
                methodName: 'createTrainee',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/trainee',
            ...(fetchMiddlewares<RequestHandler>(TraineeController)),
            ...(fetchMiddlewares<RequestHandler>(TraineeController.prototype.updateTrainee)),

            async function TraineeController_updateTrainee(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    trainee: {"in":"body","name":"trainee","required":true,"ref":"TraineeDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TraineeController();

              await templateService.apiHandler({
                methodName: 'updateTrainee',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/trainee',
            ...(fetchMiddlewares<RequestHandler>(TraineeController)),
            ...(fetchMiddlewares<RequestHandler>(TraineeController.prototype.deleteTrainee)),

            async function TraineeController_deleteTrainee(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    trainee: {"in":"body","name":"trainee","required":true,"ref":"TraineeDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TraineeController();

              await templateService.apiHandler({
                methodName: 'deleteTrainee',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/trainee/id/:id',
            ...(fetchMiddlewares<RequestHandler>(TraineeController)),
            ...(fetchMiddlewares<RequestHandler>(TraineeController.prototype.findTrainee)),

            async function TraineeController_findTrainee(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TraineeController();

              await templateService.apiHandler({
                methodName: 'findTrainee',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/trainee/all',
            ...(fetchMiddlewares<RequestHandler>(TraineeController)),
            ...(fetchMiddlewares<RequestHandler>(TraineeController.prototype.findAllTrainees)),

            async function TraineeController_findAllTrainees(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TraineeController();

              await templateService.apiHandler({
                methodName: 'findAllTrainees',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/personal-trainer',
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController)),
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController.prototype.createPersonalTrainer)),

            async function PersonalTrainerController_createPersonalTrainer(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    personalTrainer: {"in":"body","name":"personalTrainer","required":true,"ref":"PersonalTrainerDTO"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PersonalTrainerController();

              await templateService.apiHandler({
                methodName: 'createPersonalTrainer',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/personal-trainer',
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController)),
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController.prototype.updatePersonalTrainer)),

            async function PersonalTrainerController_updatePersonalTrainer(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    personalTrainer: {"in":"body","name":"personalTrainer","required":true,"ref":"PersonalTrainerDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PersonalTrainerController();

              await templateService.apiHandler({
                methodName: 'updatePersonalTrainer',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/personal-trainer',
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController)),
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController.prototype.deletePersonalTrainer)),

            async function PersonalTrainerController_deletePersonalTrainer(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    personalTrainer: {"in":"body","name":"personalTrainer","required":true,"ref":"PersonalTrainerDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PersonalTrainerController();

              await templateService.apiHandler({
                methodName: 'deletePersonalTrainer',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/personal-trainer/id/:id',
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController)),
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController.prototype.findPersonalTrainer)),

            async function PersonalTrainerController_findPersonalTrainer(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PersonalTrainerController();

              await templateService.apiHandler({
                methodName: 'findPersonalTrainer',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/personal-trainer/all',
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController)),
            ...(fetchMiddlewares<RequestHandler>(PersonalTrainerController.prototype.findAllPersonalTrainers)),

            async function PersonalTrainerController_findAllPersonalTrainers(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PersonalTrainerController();

              await templateService.apiHandler({
                methodName: 'findAllPersonalTrainers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/exercise',
            ...(fetchMiddlewares<RequestHandler>(ExerciseController)),
            ...(fetchMiddlewares<RequestHandler>(ExerciseController.prototype.createExercise)),

            async function ExerciseController_createExercise(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    exercise: {"in":"body","name":"exercise","required":true,"ref":"ExerciseDTO"},
                    success: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExerciseController();

              await templateService.apiHandler({
                methodName: 'createExercise',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/exercise',
            ...(fetchMiddlewares<RequestHandler>(ExerciseController)),
            ...(fetchMiddlewares<RequestHandler>(ExerciseController.prototype.updateExercise)),

            async function ExerciseController_updateExercise(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    exercise: {"in":"body","name":"exercise","required":true,"ref":"ExerciseDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExerciseController();

              await templateService.apiHandler({
                methodName: 'updateExercise',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/exercise',
            ...(fetchMiddlewares<RequestHandler>(ExerciseController)),
            ...(fetchMiddlewares<RequestHandler>(ExerciseController.prototype.deleteExercise)),

            async function ExerciseController_deleteExercise(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    exercise: {"in":"body","name":"exercise","required":true,"ref":"ExerciseDTO"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExerciseController();

              await templateService.apiHandler({
                methodName: 'deleteExercise',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/exercise/id/:id',
            ...(fetchMiddlewares<RequestHandler>(ExerciseController)),
            ...(fetchMiddlewares<RequestHandler>(ExerciseController.prototype.findExercise)),

            async function ExerciseController_findExercise(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExerciseController();

              await templateService.apiHandler({
                methodName: 'findExercise',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/exercise/all',
            ...(fetchMiddlewares<RequestHandler>(ExerciseController)),
            ...(fetchMiddlewares<RequestHandler>(ExerciseController.prototype.findAllExercises)),

            async function ExerciseController_findAllExercises(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    success: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                    fail: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExerciseController();

              await templateService.apiHandler({
                methodName: 'findAllExercises',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
