import DS from "ember-data";

var DnaMolecule = DS.Model.extend({
  name: DS.attr('string'),
  sequence: DS.belongsTo('dnamoleculesequence'),
  dnafeatures: DS.hasMany('dnamoleculednafeature'),
});

var DnaMoleculeSequence = DS.Model.extend({
  bases: DS.attr('string'),
});

var DnaMoleculeDnaFeature = DS.Model.extend({
  feature: DS.belongsTo('dnafeature'),
});

var DnaFeature = DS.Model.extend({
  pattern: DS.belongsTo('dnafeaturepattern'),
});

var DnaFeaturePattern = DS.Model.extend({
  bases: DS.attr('string'),
});

export default {
  DnaMolecule: DnaMolecule,
  DnaMoleculeSequence: DnaMoleculeSequence,
  DnaMoleculeDnaFeature: DnaMoleculeDnaFeature,
  DnaFeature: DnaFeature,
  DnaFeaturePattern: DnaFeaturePattern,
};
