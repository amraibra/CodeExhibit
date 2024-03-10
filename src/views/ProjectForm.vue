<template>
    <div class="bg-custom-blue w-full h-screen flex justify-center items-center">
        <div class="bg-custom-gray w-2/3 h-4/5 shadow-2xl flex flex-col items-center">
            <!--Stepper-->
            <div class="w-full p-4">
                <div class="flex justify-center pb-6 pt-8">
                    <!--Project Info-->
                    <div class="flex items-center">
                        <div class="flex items-center justify-center w-10 h-10 bg-custom-blue rounded-full text-custom-gray">
                            <i class="fas fa-folder-open"></i>
                        </div>
                        <div class="w-48 h-1 bg-custom-teal">
                        </div>
                    </div>
                    <!--Links-->
                    <div class="flex items-center">
                        <div class="flex items-center justify-center w-10 h-10 bg-custom-blue rounded-full text-custom-gray">
                            <i class="fas fa-link"></i>
                        </div>
                        <div class="w-48 h-1 bg-custom-teal"></div>
                    </div>
                    <!--Upload Step-->
                    <div class="flex items-center text-custom-gray">
                        <div class="flex items-center justify-center w-10 h-10 bg-custom-blue rounded-full">
                            <i class="fas fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <h3 class="text-mono text-custom-blue text-xl font-medium pb-5">
                    Project Information
                </h3>
                <div class="grid gap-8 sm:grid-cols-2">
                    <div>
                        <label for="project-name" class="block mb-1 text-sm font-medium text-custom-blue">
                            Project Name:
                        </label>
                        <input 
                            type="text" 
                            name="project name" 
                            id="project-name"
                            placeholder="CodeExhibit"
                            class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5">
                    </div>
                    <div>
                        <label for="members" class="block mb-1 text-sm font-medium text-custom-blue">Member Names:</label>
                        <input 
                            type="name" 
                            name="members" 
                            id="members"
                            placeholder="Samuel Tyler" 
                            class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5">
                    </div>
                    <div>
                        <label for="semester" class="block mb-1 text-sm font-medium text-custom-blue">
                            Semester:
                        </label>
                        <select 
                            type="text" 
                            name="semester" 
                            id="semester"
                            class=" appearance-none bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5">
                            <option>
                                Spring 2024
                            </option>
                            <option>
                                Fall 2023
                            </option>
                            <option>
                                Spring 2023
                            </option>
                            <option>
                                Fall 2022
                            </option>
                            <option>
                                Spring 2022
                            </option>
                        </select>
                    </div>
                    <div>
                        <label for="class" class="block mb-1 text-sm font-medium text-custom-blue">
                            Class:
                        </label>
                        <select 
                            type="text" 
                            name="class" 
                            id="class"
                            class=" appearance-none bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2.5">
                            <option>
                                Jr Software Engineering
                            </option>
                            <option>
                                Sophmore Software Engineering
                            </option>
                        </select>
                    </div>
                </div>
                <div class="grid sm:grid-cols-1 pt-8">
                    <label for="project-description" class="block mb-1 text-sm font-medium text-custom-blue">Project Description:</label>
                    <textarea 
                        id="project-description"
                        class="bg-custom-gray border-2 border-custom-blue text-custom-blue rounded-lg block w-full p-2">
                    </textarea>
                </div>
                <div class="text-center pt-7">
                    <button class="bg-custom-blue text-white w-20 h-10 rounded-lg">Next</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
</script>