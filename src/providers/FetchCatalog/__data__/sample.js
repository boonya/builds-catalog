export default {
	builds: [
		{
			ref: 'refs/heads/main',
			label: 'main',
			sha: 'f5c23c44cb5a2a077b2649665bf9415733467fbc',
			updated: new Date('2023-03-11T16:03:09.622Z'),
		},
		{
			ref: 'refs/heads/branch/name',
			label: 'branch/name',
			sha: 'd92fcd700e977f618de2930abab91e158b400c5a',
			updated: new Date('2023-03-10T16:03:09.622Z'),
		},
		{
			ref: 'refs/tags/tag',
			label: 'tag',
			sha: 'd92fcd700e977f618de2930abab91e158b400c5b',
			updated: new Date('2023-03-09T15:03:09.622Z'),
		},
		{
			ref: 'refs/pulls/8/merge',
			label: 'branch-of-pr',
			sha: 'd92fcd700e977f618de2930abab91e158b400c5c',
			updated: new Date('2023-03-08T11:13:11.622Z'),
		},
	],
	homepage: 'https://boonya.github.io/builds-catalog/',
	repo: 'https://github.com/boonya/builds-catalog',
};
