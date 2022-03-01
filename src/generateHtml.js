
  
 
 // Create a function to generate html for team's profile
  function generateHtml(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://unpkg.com/tailwindcss@0.3.0/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <script src="https://kit.fontawesome.com/3f0e51d1ec.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <nav class="bg-orange p-6 text-center">
                <div class="text-white mr-6">
                    <span class="font-semibold text-3xl items-center">My Team</span>
                </div>
            </nav>
        </header>
        <div class="w-full mb-4 bg-gray-500">
            <div class="flex flex-row flex-wrap justify-center">
                ${data}
            </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
        </script>
        <script src="./assets/js/dashboard.js"></script>
    </body>
    </html>
  `
  }
  
  module.exports = generateHtml;