export class Coach {
    coachId : number = 0;
    coachName : string='';
    coachExperience:number=0; 
    coachSpecialization:string = '';
    clubName:string = '';
    gameName : string='';
    sportClub : {
        clubId: number;
    } | undefined;
    game : {
        gameId: number;
    } | undefined
}
