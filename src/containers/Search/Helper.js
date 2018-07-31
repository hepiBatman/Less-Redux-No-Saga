

export const toDetailSubmissions = (submissions, accounts, clients) => {
  return submissions && submissions.map(submission => {
  	const newSubmission = {
  			...submission,
  			account: accounts.find(account => account.accountId === submission.accountId),
  			client: clients.find(client => client.clientId === submission.clientId),
  	};
  	
  	return newSubmission;
  });
}
