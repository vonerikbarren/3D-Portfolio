const projectProgress = {

   Admin: {
      "This file was created so that I can just leave notes to myself as I build. This is something that can definitely help us as we go down our developer road. Write here as time passeth."

      PortfolioDesired_FinishDate: ["Tue", '03-28-22'],
      PortfolioActual_FinishDate: ["", ''],
   },


   // Templates
   logTemplate: {

      Entry00: {
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "",
            EntryDate: '',
            TimeExpectedStart: '',
            TimeExpectedFinish: '',
            TimeActualStart: '',
            TimeActualFinish: '',
            NumOfCommits: Number,
         },
   
         Data: {
            Chapter00: [
               "",
               '',

               // Chapter Commits
               {
                  CommitNum: Number,
                  CommitID: 'commit_date',
                  CommitMessage: '',
               },

            ],
         },
      },

   },



   // LogBook

   PortfolioLogBook: {
      Entry01: {
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "Getting something done",
            TimeExpectedStart: 'N/A',
            TimeExpectedFinish: 'N/A',
            TimeActualStart: 'N/A',
            TimeActualFinish: 'N/A',
         },
   
         Data: {
            Chapter00: [
               "Important Notes for 3-28-22",
               'Decide how we are going to use the GIFs in our project, and consider doing a looped video instead of a GIF if the gif files do not work in the image files. Find alternatives for the css renderer and use as few as them as possible. Save those only for buttons. As they dont seem to take up alot of GL.',
            ],
         },
      },


      // Entry #02
      Entry02: {

         // |- Development of items
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "Social Presence Container Realities",
            EntryDate: '1-29-22',
            TimeExpectedStart: '11:38',
            TimeExpectedFinish: '12:30',
            TimeActualStart: '11:30',
            TimeActualFinish: '...',
            NumOfCommits: 1
         },
   
         Data: {
            Chapter00: [
               "Aim to Complete portfolio by the end of the day",
               'We still have plenty of components to make, but the goal is that we stay true and try to figure out the solution to that we can code faster.',
            ],

            Chapter01: [
               "Failed to meet goal",
               'We got started but then had to get ready to go to appointment then schedule changes then issues with Greysi. So it was a very unsuccessful day for this project',
            ],
         },


      },


      // Entry #03
      Entry03: {
         Header: {
            Level: ["Goal", 'Objective', 'task'],
            Title: "At work - Testing pictures on panels",
            EntryDate: '03-30-22',
            TimeExpectedStart: '01:13:00',
            TimeExpectedFinish: '',
            TimeActualStart: '',
            TimeActualFinish: '',
            NumOfCommits: 1
         },
   
         Data: {
            Chapter00: [
               "Pre-Second Location @ Work",
               'We were struggling to add a component until I took my time and just breathed. Keep up the good work! You got this!',
            ],

            Chapter01: [
               "Post-Second Location @ Work",
               'We are starting to work on the second photo for the first panel in the second column. We should probably build the third columns too.'
            ],

            Chapter02: [
               "Ideas Ideas Ideas",
               'So we have some pretty interesting ideas but I think I should focus on finishing the Reality first, then add to it where I can. So I am going to just develop the component containers first, then I can just develop things easily.',

               'Much more importantly, I want to know if I should keep the outside room bigger or smaller. I cant decide.',

               'HW for tomorrow:',
               '1. Create some extra Communication Containers so they can be used for the UI as well as to fly on the walls.', //

               '2. Focus tomorrow on creating all of the components necessary. We will focus on decoration on friday. Tomorrow is lets have everthing we need available.', //

               '3. Finally tomorrow also focus on creating other projects especially the ones for languages and the 3D excel also.'
            ],
         },
      },

   },


   // Entry 05
   Entry05: {
      Header: {
         Level: ["Goal", 'Objective', 'task'],
         Title: "HustleStruts for Shorcuts",
         EntryDate: '04-01-22',
         TimeExpectedStart: '13:30',
         TimeExpectedFinish: '16:00',
         TimeActualStart: '13:35',
         TimeActualFinish: '16:05',
         NumOfCommits: Number
      },

      Data: {
         Chapter00: [
            "",
            '',
         ],

         Chapter01: [
            "Creating The Rest of the Panel Columns",
            'We took a break from coding yesterday so we could clear our head. Now we need to speed up and see how much we can really get done.',
            'Especially now that we have all of our assets and what not. We still need to name the assets then add them to the library. But as far',
            'as I am concerned, everything is going pretty smoothly. So by the end of the day, I want to have the project completed. Can we do it. Are we up for the task! Try to go as fast as you can! GOOOOO! Try to finish in an hour.'
         ],
      },
   },




   // Entry 06
   Entry06: {
      Header: {
         Level: ["Sizing Realities", 'Add the necessary functions to make this so', 'task'],
         Title: "Sizing Realities of any shape",
         EntryDate: '04-05-21',
         TimeExpectedStart: '09:19',
         TimeExpectedFinish: '10:19',
         TimeActualStart: '09:25',
         TimeActualFinish: '10:40',
         NumOfCommits: Number,
      },

      Data: {

         // Chapters
         Chapter00: [
            "Writing the necessary functions to change the shape of a Reality using dat.GUI",
            'This shouldnt take longer than an hour to complete.',
         ],

         // Tasks
         TaskList: [
            [[false], ['Development of Reality Resizing']],
            [[false], ['Development of a group of Realities sizing']]
         ],

         // Commits
         commits: [
            [[{status: 'pushed'}, {code: 'commit_A1_04052022'}], "Developed the resizing of a reality (sphere)"],

         ],
      },
   },



   // Entry 07
   Entry07: {
      Header: {
         Level: ["Goal", 'Objective', 'task'],
         Title: "Final Sprint",
         EntryDate: '04-05-2022',
         TimeExpectedStart: '12:25',
         TimeExpectedFinish: '13:30-13:40',
         TimeActualStart: '',
         TimeActualFinish: '',
         NumOfCommits: Number,
         TaskList: {
            TaskA: [[false], "Decide on plan for ProjectPortfolio"],
            TaskB: [[false], "Execute Plan: {Plan Here}"],
            TaskC: [[false], "Add final touches to UI/UX"],
            TaskD: [[false], "Portfolio, Completed"],
         },
      },

      Data: {
         Chapter00: [
            "",
            '',

            // Chapter Commits
            {
               CommitNum: 2,
               CommitID: 'commit_04-05-2022_#2 ::',
               CommitMessage: 'updating Tree before Sarting Project',
               FullCommit: "commit_04-05-2022_#2 :: updating Tree before Sarting Project",
            },

         ],
      },
   },



}