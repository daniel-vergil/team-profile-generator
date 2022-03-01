function managerHtml(name, id, email, officeNumber) {
 return `
 <div class="card1 p-3">
                <div class="p-10">
                    <!--Card 1-->
                    <div class="max-w-sm bg-purple rounded-lg border-4 border-black-200">
                        <div class="flex flex-col items-center pb-10">
                            <div class="flex flex-row">
                                <img class="mb-3 w-24 h-24 rounded-full shadow-lg p-3"
                                    src="/assets/img/manager-icon.png" alt="Manager Icon">
                                <div class="flex flex-col p-3">
                                    <h5 class="mb-1 text-3xl font-medium text-gray-900 dark:text-white">${name}</h5>
                                    <span class="text-2xl text-gray-500 dark:text-gray-400">Manager</span>
                                </div>
                            </div>
                            <div class="w-full flex flex-col bg-white items-center">
                                <span class="text-xl text-gray-500 dark:text-gray-400 p-2">ID: ${id}</span>
                                <span class="text-xl text-gray-500 dark:text-gray-400 p-2">Email: <a
                                        href="mailto:${email}">${email}</a></span>
                                <span class="text-xl text-gray-500 dark:text-gray-400 p-2">Office Number:
                                ${officeNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 `
}

module.exports = managerHtml;