export const GET_CURRENT_COMPETETION = "http://api.football-data.org/v1/competitions";

export const GET_TEAM_COMPETETION="http://api.football-data.org/v1/competitions/${id}/teams";
export const GET_TABELE_COMPETETION ="http://api.football-data.org/v1/competitions/${id}/leagueTable";
export const GET_TABLE_BY_DAY_COMPETETION="http://api.football-data.org/v1/competitions/398/leagueTable/matchday=${day}";

export const GET_HEAD2HEAD_FIXTURE="";
export const GET_NEXT_FIXTURES="http://api.football-data.org/v1/fixtures?timeFrame=p7";
export const GET_NEXT_FIXTURES_BY_TIME="http://api.football-data.org/v1/fixtures?timeFrame=";
export const GET_NEXT_FIXTURES_BY_LEAGUECODE="http://api.football-data.org/v1/fixtures/timeFrame=${code}";

export const GET_COMPETETION_FIXTURES="http://api.football-data.org/v1/competitions/${competetion}/fixtures";
export const GET_COMPETETION_BY_TIME_FIXTURES="http://api.football-data.org/v1/competitions/${competetion}/fixtures?timeFrame=${day}";
export const GET_COMPETETION_BY_MATCHDAY_FIXTURES="http://api.football-data.org/v1/competitions/${competetion}/fixtures?matchday=${day}";

export const GET_TEAM_FIXTURES="http://api.football-data.org/v1/teams/${team}/fixtures";
export const GET_TEAM_BY_SEASON_FIXTURES="http://api.football-data.org/v1/teams/${team}/fixtures?season=${season}&venue=home";
export const GET_TEAM_BY_TIMEFRAME_FIXTURES="http://api.football-data.org/v1/teams/${team}/fixtures?timeFrame=${time}&venue=home";

export const GET_TEAM="http://api.football-data.org/v1/teams/";
export const GET_PALYERS="http://api.football-data.org/v1/teams/${team}/players";

export const GET_LEAGUE_TABELE="http://api.football-data.org/v1/competitions/${competetion}/leagueTable";
export const GET_LEAGUE_TABELE_IN_MATCHDAY="http://api.football-data.org/v1/competitions/${competetion}/leagueTable/matchday=${day}";
export const GET_TEAMS="http://api.football-data.org/v1/competitions/${competetion}/teams";

export const GET_YESTERDAY_FIXTURES="http://api.football-data.org/v1/fixtures?timeFrame=p1";
export const GET_TOMORROW_FIXTURES ="http://api.football-data.org/v1/fixtures?timeFrame=n2";