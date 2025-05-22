using System;
namespace XMLProcessingExperiments.Models
{
	public enum ValuableType
	{
		FineArt,
		PreciousMetals,
		AntiqueFurniture,
		HistoricalArtifact
	}
	public class Valuable : Property
	{
		public Valuable() : base()
		{
		}
	}
}

