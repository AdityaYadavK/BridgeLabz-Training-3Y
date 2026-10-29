async function call() {
	await getUser();
	await getUserBank();
	await getUserEmploye();
}

call();